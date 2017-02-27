# 使用方式

主页面
```javascript
...
<Loading 
    type="circle" 
    ref={(loading) => {
        this._loading = loading
    }}
    showOrHide="show"
/>
...
this._loading.show();
this._loading.hide();
...
static childContextTypes = {
    Loading: PropTypes.object
};

getChildContext() {
    return {Loading: this._loading};
}

```

组件中引用
```javascript
static contextTypes = {
    Loading: PropTypes.object,
};
...
this.context.Loading.show();

```
属性说明：
|   属性  |  说明   |  备注  |
| :--:    | :--:   | :--:   |
|  type   |  loading类型   |  spinner,circle,brand   |
| showOrHide| 显示或者隐藏| show,hide|


# 简介
* 依赖react

