var window = floaty.window(
    <frame gravity="center">
        <vertical  bg="#ffeeeeee" padding="5" h="{{Math.floor(device.height*0.2)}}px">
            <horizontal w="*">
                <button id="left"  text="1111111111111111111111" layout_weight="1"/>
            </horizontal>
        </vertical>
    </frame>
    
);

window.setPosition(200,200)

window.left.click(function() {
    engines.execScriptFile("/sdcard/脚本/floaty2.js");
    window.close();
});

window.exitOnClose();
setInterval(()=>{}, 1000);

