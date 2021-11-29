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
    
    
    
    //이메일 입력
    $('#selectEmail').change(function(){ 
        $("#selectEmail option:selected").each(function () { 
            if($(this).val()== '1'){ //직접입력일 경우 
            $("#str_email02").val(''); //값 초기화 
            $("#str_email02").attr("disabled",false); //활성화 
        }else{ //직접입력이 아닐경우 
            $("#str_email02").val($(this).text()); 
            //선택값 입력 
            $("#str_email02").attr("disabled",true); 
            //비활성화 
        } 
    });
    });

    //탭 안에 슬라이드
    $('button').click(function(){
        var $this = $(this);
        var index = $this.index();
        
        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');
        
        var $outer = $this.closest('.outer');
        var $current = $outer.find(' > .tabs > .tab.active');
        var $post = $outer.find(' > .tabs > .tab').eq(index);
        
        $current.removeClass('active');
        $post.addClass('active');
        // 위의 코드는 탭메뉴 코드입니다.
        
        $('.slider').slick('setPosition');
        // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
    });
    
    // 기존 처음의 slick 적용
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll : 1,
        infinite : true, 
        autoplay : true,			
		autoplaySpeed : 1000, 	
        pauseOnHover : false,
        dots: false,
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

function getDate(date) {
    return date.toLocaleDateString().replace(/\./g, "").split(" ");
  }
  
  const pad = (str) => str > 10 ? str : '0' + str;
  
  window.onload = function() {
    const ToDay = new Date();
    
    const nowMonth = ToDay.getMonth();
    
    const [y, m] = getDate(new Date(ToDay.setMonth(nowMonth)));
  
    const lastDay = getDate(new Date(y, m, 0)).pop() * 1;
    
    const day = new Date([y, m, 1].join("-")).getDay() * 1;
    
    const maxDay = Math.ceil((day + lastDay) / 7) * 7;
  
    let html = '';
  
    for (let i = 1; i <= maxDay; i++) {
      const diff = i - day;
      const d = diff <= lastDay && i > day ? diff : '';
      const tmpClass = !d ? 'background' : '';
  
      html += `<div class="dateSel ${tmpClass}">${d}</div>`;
    }
  
    document.querySelector('.dateSel').innerHTML = html;
    document.querySelector('.date_text').innerText = `${y}년 ${pad(m)}월`;
  }

