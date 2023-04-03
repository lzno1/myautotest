"ui";
 
ui.layout(
    <drawer id="drawer">
        <frame id="body" h="*" w="*">
        </frame>
    </drawer>
 
)
 
function setContainer(v) {
    ui.body.removeAllViews();
    ui.body.addView(v, new android.widget.FrameLayout.LayoutParams(-1, -1));
}
 
 
var page_1={
    ui: ui.inflate(
        <frame>
        <vertical w="*" h="*">
            <text text="这是界面一" w="*" gravity="center" />
            <input hint="界面1" w="*"/>
            <button id="change_to_page_2" w="*" text="点击切换至界面二"/>
        </vertical>
   </frame>
    ),
    initList: function() {
        console.log("打开了界面一")
        ui.change_to_page_2.on("click",()=>{
            page_2.activate()
        })
        
    },
    activate: function() {
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    }
}
 
var page_2={
    ui: ui.inflate(
       <frame>
            <vertical w="*" h="*">
                <text text="这是界面二" w="*" gravity="center" />
                <input hint="界面2" w="*"/>
                <button id="change_to_page_1" w="*" text="点击切换至界面一"/>
            </vertical>
       </frame>
    ),
    initList: function() {
        console.log("打开了界面二")
        ui.change_to_page_1.on("click",()=>{
            page_1.activate()
        })
    },
    activate: function() {
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    }
}
 
page_1.activate()
 
/*
这是模板，可以简单的照搬别人的代码，集成进同一ui
var demo={
    ui: ui.inflate(
        {{//这里写xml代码}}
    ),
    initList: function() {
        //这里写其他的函数
    },
    activate: function() {
        //这里不用动
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    }
}
*/