
 const files = require.context('./../views/', true, /\.vue$/);
 const confinRouter= [];
 files.keys().forEach((key) => {
//    debugger;    
   const _keyarr = (key.split('.')[key.split('.').length - 2].split('/'));
    const _key = _keyarr.find(item => item.indexOf('_') == 0);
    const name = (_key)?.split('_')[1];
    if(_key?.startsWith('_')) {
        confinRouter.push({
            path: '/'+ name,
            name: name,
            component: files(key).default,
          });
    }
 });
 export default confinRouter;