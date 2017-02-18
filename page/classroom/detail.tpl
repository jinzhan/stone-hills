<!DOCTYPE html>
{%html framework="y:static/lib/mod.js" mode="noscript"%}
{%head%}
<meta charset="UTF-8">
<title>优伴网站</title>
{%require name="y:widget/css/button.less"%}
{%require name="y:widget/css/base/base.less"%}
{%require name="y:widget/css/home.less"%}
{%/head%}

{%body%}

{%*顶部导航*%}
{%widget name="y:widget/header/header.tpl"%}

<div class="class-detail-layout">
    {%widget name="y:widget/classroom/detail-header/detail-header.tpl"%}
    {%widget name="y:widget/classroom/class-intro/class-intro.tpl"%}
    {%widget name="y:widget/classroom/class-evaluate/class-evaluate.tpl"%}
</div>

{%*页面底部*%}
{%widget name="y:widget/footer/footer.tpl"%}

{%/body%}
{%/html%}
