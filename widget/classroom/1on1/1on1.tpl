<div class="box-1on1">
    <h2 class="tl-title">1对1专题</h2>

    <ul class="cul course-type">
        <li><a class="cur" href="#">全部课程</a></li>
        <li><a href="#">英语</a></li>
        <li><a href="#">语文</a></li>
        <li><a href="#">数学</a></li>
        <li><a href="#">其他</a></li>
    </ul>

    <div class="course-content">
        <ul class="cf">
            {%for $i=0;$i<5;$i++%}
                <li>
                    <a href="####">
                        <span class="img"></span>
                        <span class="start-time">今天 12:00</span>
                        <span class="teacher">赵老师<em>音乐</em><em>音乐</em></span>
                    </a>
                </li>
            {%/for%}
        </ul>
    </div>
</div>