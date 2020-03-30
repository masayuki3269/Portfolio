
//マウスストーカー用のdivを取得
var stalker = document.getElementById('cursor-stalker'); 
var stalker_2 = document.getElementById('cursor-stalker-2');
var stalker_3 = document.getElementById('cursor-stalker-3');

//aタグにホバー中かどうかの判別フラグ
var hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {

    if (!hovFlag) { // hovFlag が false (aタグの上に無い)時
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    stalker_2.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    stalker_3.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
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
        stalker_2.classList.add('hover-2');
        stalker_3.classList.add('hover-3');

        //マウスストーカーの位置をリンクの中心に固定
        var rect = e.target.getBoundingClientRect(); 
        // e.target でクリックされた要素を取得
        // getBoundingClientRect()メソッドでリンクの座標(x,y)と横幅(w)・高さ(h)を取得

        var posX = rect.left + (rect.width / 2); // リンクの中心のx座標
        var posY = rect.top + (rect.height / 2); // リンクの中心のy座標
        var posX_2 = rect.left
        var posY_2 = rect.top + (rect.height / 4);
        var posX_3 = rect.right
        var posY_3 = rect.top + (rect.height / 4);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
        stalker_2.style.transform = 'translate(' + posX_2 + 'px, ' + posY_2 + 'px)';
        stalker_3.style.transform = 'translate(' + posX_3 + 'px, ' + posY_3 + 'px)';
    });

    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hover');
        stalker_2.classList.remove('hover-2');
        stalker_3.classList.remove('hover-3');
    });
}



var labelElem = document.querySelectorAll('label:not(.no_hov_stalker)'); 

for (var j = 0; j < labelElem.length; j++) {

    //マウスホバー時、つまり複数あるどれかの<label>要素にマウスが重なった時下の処理がされる
    labelElem[j].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hover');
        stalker_2.classList.add('hover-2');
        stalker_3.classList.add('hover-3');

        //マウスストーカーの位置をリンクの中心に固定
        var rect = e.target.getBoundingClientRect(); 
        // e.target でクリックされた要素を取得
        // getBoundingClientRect()メソッドでリンクの座標(x,y)と横幅(w)・高さ(h)を取得

        var posX = rect.left + (rect.width / 2); // リンクの中心のx座標
        var posY = rect.top + (rect.height / 2); // リンクの中心のy座標
        var posX_2 = rect.left
        var posY_2 = rect.top + (rect.height / 4);
        var posX_3 = rect.right
        var posY_3 = rect.top + (rect.height / 4);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
        stalker_2.style.transform = 'translate(' + posX_2 + 'px, ' + posY_2 + 'px)';
        stalker_3.style.transform = 'translate(' + posX_3 + 'px, ' + posY_3 + 'px)';

    });

    //マウスホバー解除時
    labelElem[j].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hover');
        stalker_2.classList.remove('hover-2');
        stalker_3.classList.remove('hover-3');
    });
}


// check-boxの状態を変える
function check_box_change(idname){
    var obj = document.getElementById(idname);　// 特定の<input id="???">を取得

    // .checkedプロパティはチェックボックスの状態を示している
    obj.checked = !obj.checked;   // ここでは現状のチェックボックスの値(check or checked)に現状とは逆の値を入れている
}




function instruction_change(){
    getScreenSize();
    function getScreenSize(){
        var ScrW = window.parent.screen.width;
        console.log(ScrW)
        var BreakWidth = 800;

        if(ScrW<BreakWidth){
            var instruction = document.getElementsByClassName('instruction');
            for(var i=0; i<instruction.length; i++){
                instruction[i].textContent='<< Tap !';
            }
        }

        else{
            var instruction = document.getElementsByClassName('instruction');
            for(var i=0; i<instruction.length; i++){
                instruction[i].textContent='<< click !';
            }
        }
    }
}

window.addEventListener( "resize", function () {
    getScreenSize();
    function getScreenSize(){
        var ScrW = window.parent.screen.width;
        console.log(ScrW)
        var BreakWidth = 800;

         if(ScrW<BreakWidth){
            var instruction = document.getElementsByClassName('instruction');
            for(var i=0; i<instruction.length; i++){
                instruction[i].textContent='<< Tap !';
            }
        }

        else{
            var instruction = document.getElementsByClassName('instruction');
            for(var i=0; i<instruction.length; i++){
                instruction[i].textContent='<< click !';
            }
        }
    }
}) ;



