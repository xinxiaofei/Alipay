var express = require('express');
var router = express.Router();
var Alipay = require('../lib/alipay');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
    res.redirect(url)
        // console.log(url)

});
router.get('/alipay', function(req, res) {
    var alipay =new Alipay({
        method: 'alipay.trade.page.pay',
        timestamp: '2016-12-27 18:00:00',
        version: '1.0',
        biz_content: {
            out_trade_no: 'ALIPAYTEST2016081622560194114',
            product_code: 'FAST_INSTANT_TRADE_PAY',
            total_amount: '0.01',
            subject: 'Iphone6 16G',
            body: 'Iphone6 16G',
            scene: 'qr_code',
            store_id: 'SH001',
        }
    })
    res.redirect(alipay.pay())
});
router.get('/alipaycallbak', function(req, res) {
    // console.log(req.query)
    var result = req.query;
    res.render('pay', { result: result })
});

router.post('/alipaynotice', function(req, res) {
    console.log(req.query)
    console.log(req.body)
});

router.get('/login', function(req, res) {
    var alipay =new Alipay({
        method: 'alipay.system.oauth.token',
        timestamp: '2016-12-27 18:00:00',
        version: '1.0',
        biz_content: {
            grant_type:'authorization_code',
        }
    })
    res.redirect(alipay.oauthLogin())
});

module.exports = router;