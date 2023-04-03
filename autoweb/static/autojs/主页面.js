var window = floaty.window(
    <frame gravity="center" h="{{Math.floor(device.height*0.4)}}px" w="{{Math.floor(device.width*0.6)}}px">
        <vertical bg="#eeeeeeee"  padding="5">
            <text  id="title" textColor="#000000" gravity="center" margin="30" text="主页面" textSize="20sp" />
            <button  id="zifubao" text="支付宝助手" style="Widget.AppCompat.Button.Colored" />
            <button  id="music" text="团奏工具" style="Widget.AppCompat.Button.Colored" />
            <button  id="exit" text="退出" style="Widget.AppCompat.Button.Colored"  textSize="20sp" />
        </vertical>
    </frame>
    
);

window.setPosition(device.width*0.2, device.height*0.3)

window.zifubao.click(function() {
    engines.execScriptFile("./蚂蚁森林.js");
    window.close();
});

window.exit.click(function() {
    window.close();
});

window.exitOnClose();
setInterval(()=>{}, 1000);