/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {

  var banners = [
    'img/banner/01.jpg',
    'img/banner/02.jpg',
    'img/banner/03.jpg',
    'img/banner/04.jpg',
    'img/banner/05.jpg',
  ];

  var products = [
        { title: 'Karaoke Mixers',
          items: [{src: 'img/product/a.png', href: 'content1.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content2.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content3.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content4.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content5.html', text: 'dasdadsad dqasdasd'},]
        },
        { title: 'Karaoke Players',
          items: [{src: 'img/product/a.png', href: 'content1.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content2.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content3.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content4.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content5.html', text: 'dasdadsad dqasdasd'},]
        },
        { title: 'Active Speakers',
          items: [{src: 'img/product/a.png', href: 'content1.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content2.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content3.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content4.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content5.html', text: 'dasdadsad dqasdasd'},]
        },
        { title: 'Wireless Mircrophone',
          items: [{src: 'img/product/a.png', href: 'content1.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content2.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content3.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content4.html', text: 'dasdadsad dqasdasd'},
                  {src: 'img/product/a.png', href: 'content5.html', text: 'dasdadsad dqasdasd'},]
        },
      ];



  // 以下不用理他

  var $banner_container = $('#banner .banner_container').css ({width: banners.length * 1200 + 'px'})
                                                        .append (banners.map (function (t, i) { return $('<img />').attr ('src', t).css ({left: i * 1200 + 'px'}); }));

  var timer = null;

  $('#banner .left_arrow').click (function () {

    var $banners = $('#banner .banner_container img');

    $banner_container.prepend ($banners.eq ($banners.length - 1).clone ().css ({left: -1 * 1200 + 'px'}));
    $banners.eq ($banners.length - 1).remove ();

    $('#banner .banner_container img').each (function (i) {
      $(this).css ({left: i * 1200 + 'px'});
    });

  });

  $('#banner .right_arrow').click (function () {
    var $banners = $('#banner .banner_container img').map (function (i) {
      return $(this).css ({left: (i - 1) * 1200 + 'px'});
    });

    clearTimeout (timer);

    timer = setTimeout (function () {
      $banner_container.append ($banners[0].clone ().css ({left: ($banners.length - 1) * 1200 + 'px'}));
      $banners[0].remove ();
    }, 350);
  });

  var $product = $('#product').append (products.map (function (t) {
    return $('<div />').attr ('data-hash', t.title.toLowerCase ()).addClass ('content').append ($('<div />').addClass ('l').text (t.title)).append ($('<div />').addClass ('r').append (t.items.map (function (t) {
      return $('<a />').attr ('href', t.href).addClass ('box').append ($('<img />').attr ('src', t.src)).append ($('<div />').addClass ('text').html (t.text));
    })));
  }));

  if (window.location.hash.substring (1)) {
    var hash = window.location.hash.substring (1).toLowerCase ();
    $("html, body").stop ().animate ({
      scrollTop: $('#product .content[data-hash="' + hash + '"]').offset ().top - 10}, 500);
  }
  $(window).on('hashchange', function() {
    if (window.location.hash.substring (1)) {
      var hash = window.location.hash.substring (1).toLowerCase ();
      $("html, body").stop ().animate ({
        scrollTop: $('#product .content[data-hash="' + hash + '"]').offset ().top - 10}, 500);
    }
  });
});