//注册指令
export function initDirective(Vue){
    //注册移动端滑动或点击
    Vue.directive('viewtouch', {
        bind(el,binding){
          let disY = 0;
          el.addEventListener('touchstart',function(e){
            disY = e.changedTouches[0].pageY;
          })
          el.addEventListener('touchend',function(e){
            let currY = e.changedTouches[0].pageY;
            if(Math.abs(currY - disY) < 2 ){
              e.preventDefault();
              binding.value();
            }
          })
        }
      })
    Vue.directive('leftenter',{
      bind(el){
        el.classList.add('left-enter');
        setTimeout( ()=>{
          el.classList.add('enter')
        },30)
        setTimeout( ()=>{
          el.classList.remove('left-enter');
          el.classList.remove('enter');
        },500)
      }
    })
    Vue.directive('rightenter',{
      bind(el){
        el.classList.add('right-enter');
        setTimeout( ()=>{
          el.classList.add('enter')
        },30)
        setTimeout( ()=>{
          el.classList.remove('right-enter');
          el.classList.remove('enter');
        },500)
      }
    })
}