
//マウスストーカー用のdivを取得
var stalker = document.getElementById('cursor-stalker'); 

//aタグにホバー中かどうかの判別フラグ
var hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {

    if (!hovFlag) { // hovFlag が false (aタグの上に無い)時
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }

});


//リンクへ吸い付く処理

// querySelector()」は、JavaScriptから任意のHTML要素を検出・取得することができる
// querySelector(#test や .test や ul など) cssのセレクタ感覚でHTMLの取得が出来る
// ただし、複数の合致するHTMLタブがある場合(class="content" など)は一番最初に合致するものだけ適用
// document.querySelectorAll()は全て取得できる
var linkElem = document.querySelectorAll('a:not(.no_hov_stalker)'); 
// ここでは「.no_hov_stalker」が付いていな全ての<a>を取得、この関数を実行させたくなければcssのセレクタに「.no_hov_stalker」を付ければOK

for (var i = 0; i < linkElem.length; i++) {

    //マウスホバー時、つまり複数あるどれかの<a>要素にマウスが重なった時下の処理がされる
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hover');

        //マウスストーカーの位置をリンクの中心に固定
        var rect = e.target.getBoundingClientRect(); 
        // e.target でクリックされた要素を取得
        // getBoundingClientRect()メソッドでリンクの座標(x,y)と横幅(w)・高さ(h)を取得

        var posX = rect.left + (rect.width / 2); // リンクの中心のx座標
        var posY = rect.top + (rect.height / 2); // リンクの中心のy座標

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });

    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hover');
    });
}



var labelElem = document.querySelectorAll('label:not(.no_hov_stalker)'); 


for (var j = 0; j < labelElem.length; j++) {

    //マウスホバー時、つまり複数あるどれかの<label>要素にマウスが重なった時下の処理がされる
    labelElem[j].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hover');

        //マウスストーカーの位置をリンクの中心に固定
        var rect = e.target.getBoundingClientRect(); 
        // e.target でクリックされた要素を取得
        // getBoundingClientRect()メソッドでリンクの座標(x,y)と横幅(w)・高さ(h)を取得

        var posX = rect.left + (rect.width / 2); // リンクの中心のx座標
        var posY = rect.top + (rect.height / 2); // リンクの中心のy座標

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });

    //マウスホバー解除時
    labelElem[j].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hover');
    });
}