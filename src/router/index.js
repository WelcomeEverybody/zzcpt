import { createRouter, createWebHashHistory } from 'vue-router';
import MenuData from '../data/menu.json';
import Index from '../views/index.vue';
import button from '../views/button.vue';
import dropdown from '../views/dropdown.vue';
import calendar from '../views/calendar.vue';
import switchs from '../views/switch.vue';
import select from '../views/select.vue';
import checkbox from '../views/checkbox.vue';
import radio from '../views/radio.vue';
import showText from '../views/showtext.vue';
import loading from '../views/loading.vue';
import dialog from '../views/dialog.vue';
import slider from "../views/slider.vue";
import scrollbar from '../views/scrollbar.vue';
import backtop from '../views/backtop.vue';
import canvassign from '../views/canvassign.vue';
import tabs from '../views/tabs.vue';
import steps from '../views/steps.vue';
const obj = {
    button: button,
    dropdown: dropdown,
    calendar: calendar,
    switch: switchs,
    select: select,
    checkbox: checkbox,
    radio: radio,
    showtext: showText,
    loading: loading,
    dialog: dialog,
    slider: slider,
    scrollbar: scrollbar,
    backtop: backtop,
    canvassign: canvassign,
    tabs: tabs,
    steps: steps
};
const routes = [
    {
        path: '/', component: Index,
        redirect: '/hello',
        children: []
    },
];
routes[0].children.push({
    path: '/hello',
    name: 'Hello',
    component: () => import(`../views/hello.vue`)
});
for (let i = 0; i < Object.values(MenuData).length; i++) {
    const item = Object.values(MenuData)[i];
    routes[0].children.push({
        path: item.path,
        name: item.type,
        component: obj[item.type]
    });
}
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
