window.addEventListener('load',function(){
    var main=document.querySelector('.main');
    var lb=document.querySelector('.lb')
    var ul=lb.querySelector('ul');
    var ol=document.querySelector('ol');
    var zb=document.querySelector('.zb')
    var yb=document.querySelector('.yb')
  
    main.addEventListener('mouseover',function(){
        zb.style.display='block';
        yb.style.display='block';
        clearInterval(times);
        times=null;
    })
    main.addEventListener('mouseout',function(){
        zb.style.display='none';
        yb.style.display='none';
    times=setInterval(function(){
            yb.click();
        },3000)
    })
    // 显示与隐藏左右箭头模块结束
    for(i=0;i<ul.children.length;i++){
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        ol.children[0].style.backgroundColor='blue';
        li.addEventListener('click',function(){
            for(i=0;i<ol.children.length;i++){
                ol.children[i].style.backgroundColor='#fff';
            }
            this.style.backgroundColor='blue';
            var index=this.getAttribute('index');
            num=index;
            sum=index;
            dh(ul,-index*lb.offsetWidth)
          
        })
    }
    // 图片随小圆圈滚动模块结束
    var num=0;
    var sum=0;
    var first=ul.children[0].cloneNode(true);
    var flag=true;
    ul.appendChild(first);
    yb.addEventListener('click',function(){
       if(flag){
           flag=false;
        if(num==ul.children.length-1){
            num=0;
            ul.style.left=0;
        }
        num++;
        dh(ul,-num*lb.offsetWidth,function(){
            flag=true;
        })
        sum++;
        if(sum==ol.children.length){
            sum=0;
        }
       
        for(i=0;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor='#fff';
        }
        ol.children[sum].style.backgroundColor='blue';
       }
    })
    // 左侧按钮模块结束
    zb.addEventListener('click',function(){
       if(flag){
           flag=false;
        if(num==0){
            num=ul.children.length-1;
     ul.style.left=(ul.children.length-1)*lb.offsetWidth;
        }
        num--;
        dh(ul,-num*lb.offsetWidth,function(){
            flag=true;
        })
        sum--;
        if(sum<0){
            sum=ol.children.length-1;
        }
       
        for(i=0;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor='#fff';
        }
        ol.children[sum].style.backgroundColor='blue';
       }
    })
    // 右侧模块结束
    var times=setInterval(function(){
        yb.click();
    },3000)
    var input=document.querySelector('input');
    input.addEventListener('focus',function(){
        if(this.value=='音乐/视频/电台/用户'){
            this.value='';
        }
    })
    input.addEventListener('blur',function(){
        if(this.value==''){
            this.value='音乐/视频/电台/用户';
        }
    })
})