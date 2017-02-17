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

{%*首页幻灯片*%}
{%widget name="y:widget/carousel/carousel.tpl"%}

{%*首页版块导航*%}
{%widget name="y:widget/index-nav/index-nav.tpl"%}

{%*特色英语*%}
{%widget name="y:widget/special-english/special-english.tpl"%}

{%*课程推荐*%}
{%widget name="y:widget/course/course.tpl"%}

{%*最新名师*%}
{%widget name="y:widget/teacher/teacher.tpl"%}

{%*页面底部*%}
{%widget name="y:widget/footer/footer.tpl"%}

{%/body%}
{%/html%}