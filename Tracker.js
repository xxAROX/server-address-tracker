
/**
 * Tracker.js by xxAROX.
 */


var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Runnable = java.lang.Runnable;
var LinearLayout = android.widget.LinearLayout;
var Button = android.widget.Button;
var View = android.view.View;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;

    ctx.runOnUiThread(new Runnable({ run: function(){
        try {
            var layout = new LinearLayout(ctx);
            layout.setOrientation(1);

            var button = new Button(ctx);
            button.setText("Track");
            button.setOnClickListener(new View.OnClickListener({
                onClick: function(view) {
                    var ip = Server.getAddress();
                    var port = Server.getPort();
					
					if (ip === "127.0.0.1" || ip === "0.0.0.0") {
						clientMessage("§cYou are in §gSingleplayer§c.");
					} else {
						clientMessage("§l§a»§r §9IP: §5" + ip);
						clientMessage("§l§a»§r §9PORT: §5" + port);
					}
                }
            }));
            layout.addView(button);

            GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0);
        } catch (err) {
            print("An error occured: " + err);
        }
    }}));
