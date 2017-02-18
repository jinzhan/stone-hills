<div class="classroom-main">

    <div class="carousel-box">

    </div>

    <h2 class="tl-title">全部课程 &gt;</h2>

    <ul class="cul course-type">
        <li><a class="cur" href="#">全部课程</a></li>
        <li><a href="#">英语</a></li>
        <li><a href="#">语文</a></li>
        <li><a href="#">数学</a></li>
        <li><a href="#">其他</a></li>
    </ul>

    <div class="cul sort-type cf">
        <ul class="main-sort-type">
            <li><a class="cur" href="#">综合排序</a></li>
            <li><a href="#">最新</a></li>
            <li><a href="#">评分</a></li>
            <li class="sort-type-price"><a href="#">价格</a>
                <span class="up"></span>
                <span class="down"></span>
            </li>
            <li class="price-range">
                <a href="#">价格区间</a>
                <ul class="price-content">
                    <li>1000以下</li>
                    <li>1000--2000</li>
                    <li>2000--3000</li>
                    <li>3000以上</li>
                </ul>
            </li>
        </ul>

        <ul class="sort-type-plus">
            <li><span></span>直播课</li>
            <li><span></span>精品课</li>
        </ul>
    </div>

    <div class="course-content">
        <ul>
            {%for $i=0;$i<9;$i++%}
            <li>
                <a href="/y/page/classroom/detail">
                    <span class="img"></span>
                    <span class="title">课程标题课程标题课程标题课程标题课程标题</span>
                    <span class="join-num">报名人数xxx人</span>
                    <span class="fee">￥666.00</span>
                </a>
            </li>
            {%/for%}
        </ul>
    </div>
</div>
