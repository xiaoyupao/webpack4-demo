async function getComponent() {
    var element = document.createElement('div');
       const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    
       console.log('111222_.join_', _)
       console.log('element', element)

    //    官网上没有加 default ，default 是自己加的，因为打印 _ 有问题，加上就好用了
    //    element.innerHTML = _.join(['Hello', 'webpack'], ' ');       
       element.innerHTML = _.default.join(['Hello', 'webpack'], ' ');
    
       return element;
}
getComponent().then(component => {
    console.log("component", component)
    document.body.appendChild(component);
});
