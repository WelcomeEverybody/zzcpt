import * as component from './components';
export const install = function (app) {
    Object.keys(component).forEach((key) => {
        if(component[key].name){
            app.component(key, component[key]);
        }else{
            app.use(component[key]);
        }
    });
}
export default {install};