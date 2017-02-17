<!DOCTYPE html>
{%html framework="y:static/lib/mod.js" mode="noscript"%}
{%head%}
<meta charset="UTF-8">
<title>优伴网站</title>
{%require name="y:widget/css/base/base.less"%}
{%require name="y:widget/css/home.less"%}
{%/head%}

{%body%}

{%*顶部导航*%}
{%widget name="y:widget/header/header.tpl"%}

<div class="layout-1238 class-room-layout">
    <div class="cf">
        {%widget name="y:widget/classroom/main/main.tpl"%}
        {%widget name="y:widget/classroom/aside/aside.tpl"%}
    </div>
    {%widget name="y:widget/classroom/1on1/1on1.tpl"%}
</div>

{%*页面底部*%}
{%widget name="y:widget/footer/footer.tpl"%}

{%/body%}
{%/html%}