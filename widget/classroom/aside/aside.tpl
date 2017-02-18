<div class="class-aside">
    <div class="tl-header">
        <h2 class="tl-title">即将直播</h2>
        <div class="tl-btn-container">
            <a href="" class="tl-forward tl-btn">
                <span class="tl-right-arrow"></span>
            </a>
            <a href="" class="tl-backward tl-btn">
                <span class="tl-left-arrow"></span>
            </a>
        </div>
    </div>
    <div class="course-content">
        <ul>
            {%for $i=0;$i<5;$i++%}
                <li>
                    <a href="/y/page/classroom/detail">
                        <span class="img"></span>
                        <span class="start-time">今天 12:00</span>
                        <span class="title">课程标题课程标题课程标题课程标题课程标题</span>
                        <span class="fee">￥666.00</span>
                    </a>
                </li>
            {%/for%}
        </ul>
    </div>
</div>