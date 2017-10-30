exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);
};


//this isi iisi isi iisi iisi iis iisi i
////////