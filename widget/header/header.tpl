<header class="cf">
    <a class="logo" href="#"><img src="/widget/header/img/logo.png" /></a>

    <aside class="not-login" style="display: none">
        <ul>
            <li><a href="#">免费注册</a></li>
            <li><a href="#">学生登录</a></li>
        </ul>
    </aside>

    <aside class="is-login">
        <div class="head-photo">
            <img src="" alt="">
        </div>
        <div class="user-box">
            <p class="user-name">张三</p>
            <div class="user-info-box">
                <a href="#" class="user-notice-btn">
                    <img src="/widget/header/img/letter.png" alt="home"/>
                </a>
           <a href="javascript:void(0)" class="user-drop-down-btn" id="user-drop-down-btn">
                    <img src="/widget/header/img/profile.png" alt="home"/>
                    <div class="user-drop-down" id="user-drop-down">
                        <div class="little-arrow"></div>
                        <div class="shadow-arrow"></div>
                        <ul class="true-list">
                            <li>
                                <img src="/widget/header/img/room.png" alt="home"/>
                                我的主页
                            </li>
                            <li>
                                <img src="/widget/header/img/class-manage.png" alt="class-m"/>
                                课程管理
                            </li>
                            <li>
                                <img src="/widget/header/img/trade-manage.png" alt="trade-m"/>
                                交易管理
                            </li>
                            <li>
                                <img src="/widget/header/img/dollar.png" alt="dollar"/>
                                账户充值
                            </li>
                            <li>
                                <img src="/widget/header/img/setup.png" alt="setup"/>
                                个人设置
                            </li>
                            <li>
                                <img src="/widget/header/img/go-away.png" alt="go-away"/>
                                退出登录
                            </li>
                        </ul>
                    </div>
                </a>

            </div>
        </div>
    </aside>

    <nav>
        <div class="search">
            <input type="text" name="" id="">
            <button class="b"></button>
        </div>
        <ul>
            <li><a class="current" href="/y/page/home">首页</a></li>
            <li><a href="/y/page/classroom/index">直播课堂</a></li>
            <li><a href="#">课程</a></li>
            <li><a href="#">家教</a></li>
            <li><a href="#">微校</a></li>
            <li><a href="/y/page/quxue">蘑菇街英语</a></li>
            <li><a href="#">智力游戏</a></li>
            <li><a href="/y/page/about">关于优看</a></li>
            <li><a href="#">下载APP</a></li>
        </ul>
    </nav>
</header>
{%script%}
    require.async(['./header.js']);
{%/script%}