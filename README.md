
```javascript
// 将请求参数转换为数组并排序
function _getParams(params){
    params.biz_content = JSON.stringify(params.biz_content);
    var preStr = '';
    var keySet = [];
    for (var key of Object.keys(params).sort()) {
        if (!params[key] || key == 'sign') {
            continue;
        }
        keySet.push(key);
    }
    for (var i = 0; i < keySet.length; i++) {
        var key = keySet[i];
        var value = params[key];
        if (i == keySet.length - 1) {
            preStr = preStr + key + '=' + value + '';
        } else {
            preStr = preStr + key + '=' + value + '&';
        }
    }
    return preStr;
}
// 签名
function _getSign(params){
    let preStr=_getParams(params)
    let privateKey = '-----BEGIN PRIVATE KEY-----\n' + params.private_key + '\n-----END PRIVATE KEY-----';
    let aliPublicKey = '-----BEGIN PUBLIC KEY-----\n' + params.ali_public_key + '\n-----END PUBLIC KEY-----';
    let signer = crypto.createSign('RSA-SHA256');
    if (params.sign_type == 'RSA') {
        signer = crypto.createSign('RSA-SHA1');
    }
    signer.update(preStr);
    let sign = signer.sign(privateKey, 'base64');
    return sign;
}
// 将请求参数与签名拼起来
function _getSecretSign(params){
    let sign=_getSign(params)
    params.sign = sign;
    let content = qs.stringify(params);
    let requestUrl = params.geteway_url + content;
    return requestUrl;
}
// 回调验签
function _getVerifyParams(requestParams){
    let sPara=[];   //转换为数组有利于排序，除去空值和签名参数
    if(!requestParams) return null;
    for(let key in requestParams){
        if((!requestParams[key]) || key=='sign' || key == 'sign_type'){
            continue;
        };
        sPara.push([key,requestParams[key]]);
    }
    sPara=sPara.sort();
    let prestr='';
    for(let j=0;j<sPara.length;j++){
        let obj=sPara[j];
        if(j==sPara.legnth-1){
            prestr=prestr+obj[0]+'='+obj[1]+'';
        }else{
            prestr=prestr+obj[0]+'='+obj[1]+'&'
        }
    }
    return prestr;
}
function _veriySign(data){
    try{
        var responseData = JSON.parse(data);
        //获取待验签字符串 
        var preVerifyStr = JSON.stringify(responseData.alipay_trade_precreate_response);
        //转义正斜杠 
        var reg = new RegExp('/', "g");
        preVerifyStr = preVerifyStr.replace(reg, '\\/');
        //验签 
        var verifier = crypto.createVerify('RSA-SHA256');
        if (this.sign_type == 'RSA') {
            verifier = crypto.createVerify('RSA-SHA1');
        }
        verifier.update(preVerifyStr);
        console.log("验签结果：" + verifier.verify(aliPublicKey, responseData.sign, 'base64'));
        return verifier.verify(aliPublicKey, responseData.sign, 'base64');
    }catch(err){
        console.log('verfiySign',err)
    }
}
```
