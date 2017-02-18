<div class="class-evaluate">
    {%widget name="y:widget/wgt/title/title.tpl" title="课程评价"%}
    <ul class="evaluate-content">
        <li class="clearfix">
            <div class="evaluate-logo" style="background-image: url();"></div>
            <div class="evaluate-detail">
                <div class="evaluate-level" data-level='5'>
                    <span class="flower-gray"></span>
                    <span class="flower-color len-0"></span>
                </div>
                <p>学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价。</p>
                <span class="evaluate-time">2017-02-18 11:11</span>
            </div>
        </li>
        <li class="clearfix">
            <div class="evaluate-logo" style="background-image: url();"></div>
            <div class="evaluate-detail">
                <div class="evaluate-level" data-level='2'>
                    <span class="flower-gray"></span>
                    <span class="flower-color len-1"></span>
                </div>
                <p>学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价。</p>
                <span class="evaluate-time">2017-02-18 11:11</span>
            </div>
        </li>
        <li class="clearfix">
            <div class="evaluate-logo" style="background-image: url();"></div>
            <div class="evaluate-detail">
                <div class="evaluate-level" data-level='0'>
                    <span class="flower-gray"></span>
                    <span class="flower-color len-5"></span>
                </div>
                <p>学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价学生评价。</p>
                <span class="evaluate-time">2017-02-18 11:11</span>
            </div>
        </li>
    </ul>
    <div class="paginator">
        <ul class="pagelist clearfix">
            <li class="left">上一页</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="right">下一页</li>
        </ul>
        <div class="countpage clearfix">
            <div class="pagenumber">
                共<span>100</span>页
            </div>
            <div class="goto">
                去第
                <input type="text">
                页           
            </div>
            <button class="confirm">确定</button>
        </div>
    </div>
</div>

{%script%}
    require.async('./class-evaluate.js', function(evaluate){
        evaluate.init();
    });
{%/script%}










