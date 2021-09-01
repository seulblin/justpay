$(document).ready(function(){

// 체크박스 전체 선택
  $(".terms_inner").on("click", "#checkAll", function () {
    var checked = $(this).is(":checked");
    if(checked){
        $(this).parents(".terms_inner").find('input').prop("checked", true);
    } else {
        $(this).parents(".terms_inner").find('input').prop("checked", false);
    }
  });
  
    $('.pwCheck').focusout(function () {
        var pw = document.getElementById('password1').value;
        var SC = ["!","@","#","$","%"];
        var check_SC = 0;

        if(pw.length < 6 || pw.length > 16){
            window.alert('비밀번호는 6글자 이상, 16글자 이하만 이용 가능합니다.');
            document.getElementById('password1').value='';
        }
        for(var i=0;i<SC.length;i++){
            if(pw.indexOf(SC[i]) != -1){
                check_SC = 1;
            }
        }
        if(check_SC == 0){
            window.alert('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
            document.getElementById('password1').value='';
        }
        if(document.getElementById('password1').value !='' && document.getElementById('password2').value!=''){
            if(document.getElementById('password1').value==document.getElementById('password2').value){
                document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
                document.getElementById('check').style.color='blue';
            }
            else{
                document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
                document.getElementById('check').style.color='red';
            }
        }
    });

    //모바일 메뉴 열기
    $('.mobile-bur').on('click',function(){
        $('.mobile-container').css('right','0');
        $('.mobile-conBg').show();
    });

    //모바일 메뉴 닫기
    $('.mobile-close').on('click',function(){
        $('.mobile-container').css('right','-99999px');
        $('.mobile-conBg').hide();
    });    

    //모달열기
    $('#link-modal').click(function(){
        $('.modal-link').show();
        $('.modal-link > .modal-linkbox > .modal-this').addClass('ani');
    });  
    //모달닫기
    $('.modal-title > span').click(function(){
        $('.modal-link').hide();
        $('.modal-link > .modal-linkbox > .modal-this').removeClass('ani');
    });
    
    
    



});


//체크여부 확인
function agree(){
    if ($("input:checkbox[name=agree1]").is(":checked") == true) {
            //체크가 되어있을때.    
            location.href="../join/sign-complete.html";
    } else {
            //체크가 안되어있을때.
            alert('필수 체크박스를 선택해주세요')
    }
}

