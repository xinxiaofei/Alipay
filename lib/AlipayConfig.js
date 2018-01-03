module.exports={
    //应用ID,您的APPID。
    'app_id' : "2016090800465692",
    //异步通知地址
    'notify_url' : "http://xinfei.ngrok.newguid.cn:8000/alipaynotice",
    //同步跳转
    'return_url' : "http://localhost:3000/alipaycallbak",
    //编码格式
    'charset' : "UTF-8",
    //签名方式
    'sign_type':"RSA2",
    //支付宝网关
    'geteway_url' : "https://openapi.alipaydev.com/gateway.do?",
    //支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    'ali_public_key' : "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArCJdudVEISIDxzyw3FfMuPvPa/MYa6ArVUhqixKY2zvT5WcEgypw6n62Vyyp/BJO2zvBsnJ9Fw3FwvyDJV3peWr+h1v70nYPAcQTEI/91mtrWcJ3Lj4a4p+d0w5v0MnX+09wP8uZsQ3pN69nbehNTPVWk4yYDc0PtIaWDG/FxIdiSxGtGIs9OCNJHucV2BpB5nGKu9qNnaR449dYaRH22cJ5B6+8wHqjzwR0bq7coFWFedl//BBNNakphZtwfUqqRKT0B5MlggAhxVdqTd0B0EBcV9ydRQRKSWCZjGUxRZxK5ThoacybOFn8hpr6d0zbB32jLdek8QxpG6o4f2rnFQIDAQAB",
    //商户私钥
    'private_key' : "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsIl251UQhIgPHPLDcV8y4+89r8xhroCtVSGqLEpjbO9PlZwSDKnDqfrZXLKn8Ek7bO8Gycn0XDcXC/IMlXel5av6HW/vSdg8BxBMQj/3Wa2tZwncuPhrin53TDm/Qydf7T3A/y5mxDek3r2dt6E1M9VaTjJgNzQ+0hpYMb8XEh2JLEa0Yiz04I0ke5xXYGkHmcYq72o2dpHjj11hpEfbZwnkHr7zAeqPPBHRurtygVYV52X/8EE01qSmFm3B9SqpEpPQHkyWCACHFV2pN3QHQQFxX3J1FBEpJYJmMZTFFnErlOGhpzJs4WfyGmvp3TNsHfaMt16TxDGkbqjh/aucVAgMBAAECggEAKkojJrW7kDxQG1HQzcGQXV4YHphRxpdKLiCldFd0UGBJddGybRsvNJ0+5PnnJTPGRdxPgSzZiKFslbP98F87LgZYVB8IJjO1CiUG3gnSPiyT6jB5oVXGuyil2KVyWSRNuMNSe4nkz3fwdSrVyU3KN/8KbyOac8GOezaZhKKtPtPvht2kJRO84NgVxlIzmWgI6yr5P04+SjklQiVnMsqFU3NycHYfQul/BWz4j+1Y4D16Zo3nqpQm37H6QzVysGyl+4K3DXxWmauZ6sBT3ss15BFxXtbp6LtaJAjulGnO3vBs3IyCVKyQve658r/74GNxg83unMs1Z6KKDJlAQ+FIHQKBgQD3mf+go6XmW8vjgqa3gQDMH9GGpKG6knMy49ME6Igi+14BEtqcAc/xZDW3f2j17hmg8K9XQtFLWGAD3SOwhbh2S97fje7QD+W4KqOorNMHEr4jr7mW6kVAgK5WkFqyK6gv6qnfVXXzYB4DzsslT/+AsWv6OsqoRNdsWPDwTNhR7wKBgQCx+Q+2FBGm/FDujCU+uNsxIknFD2Q8oDJpGhDdkklupvAqHPxvq4cI/fFiLmFQtKUjWs/5DH/e3yoMT6Qgm2lVoPcClbr5NjjRtaHcAS7KyFS9y7tIoTmkbv1MU/nIDYwPtNCp+Q5u0hbtY9CuZnNOjPabqWP8lGwJckRPgmFLOwKBgQCGe7KIgdo+AGYBsJj02rCgLjgTtZ/SQnEnlu6qn9Ixje5FDwSF78YOCqvSevV7flOVQqU59CTRk7Ky5o3X9wl110e6jNDFWZ0gJqi1mQkVsmxr3aoj+iKbIkmO4uEgHO5A+GhD0Zs7EV28G7njDkxsjfFj/ELOmnWXd8eF/XcRKQKBgB/NcMhJl8nuJowqEPG/WLPT+7iyAmhu+/MaDE97t5GFVT9BRL6zuQKbVkoEHbGtRiEmNim72RG7cSkYBi0peE4r4Ffe57Vmwgp/WXgV4gWsfLAZutLEtKc0iiDclLLx8MhRuEPXVIPrGNu8zWqMtiggOmUghNR6tT+O4rQOiVJHAoGBAJG7ZfvCxpGcrj67+n1R1ClnylTNrebCzUWaD2mXKOy/AGYgj6e35NnQPrZ43pUK+YKnoyThKntryPIpHd3F5P32NLe3FPjrW7mpTyjCO+crsASJtFT/wzd2AGE2DCcPhe5WAsZwJ3xhLDY56STnM4RfNhLGhq6uweli18vSpw/t",
    'biz_content':{
        out_trade_no: 'ALIPAYTEST2016081622560194112',
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: '0.01',
        subject: 'Iphone6 16G',
    }
}