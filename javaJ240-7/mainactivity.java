package jp.ac.iwate_it.y21511.mydrawapp;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;
//y21511
public class MainActivity extends AppCompatActivity {

    private static final int REQUEST_CODE = 1; //任意のリクエストコード
    private int red, green, blue;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        red = 0; //初期化
        green = 0;
        blue = 0;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        //メニューを展開する
        getMenuInflater().inflate(R.menu.opt_menu,menu);
        //return super.onCreateOptionsMenu(menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        //Log.d("itemSelected",item.getTitle().toString());
        Toast.makeText(this,item.getTitle().toString(),Toast.LENGTH_LONG).show();
        MyView myView = findViewById(R.id.myView);
        switch (item.getItemId()) { //押されたボタンで処理を実行
            case R.id.itemBlack:  //押されたボタンで色を変える
                red = 0;
                green = 0;
                blue = 0;
                myView.changeColor(red,green,blue);
                break;
            case R.id.itemRed:
                red = 255;
                green = 0;
                blue = 0;
                myView.changeColor(red,green,blue);
                break;
            case R.id.itemGreen:
                red = 0;
                green = 255;
                blue = 0;
                myView.changeColor(red,green,blue);
                break;
            case R.id.itemBlue:

                red = 0;
                green = 0;
                blue = 255;
                myView.changeColor(red,green,blue);
                break;
            case R.id.itemFree:
                System.out.print("1");
                startSubActivity();
                break;
            case R.id.itemClear:
                myView.clearPath();
            default:

        }

        return true;
        }
    public void startSubActivity(){  //subActivityを呼び出す
        Intent intent = new Intent(this, SubActivity.class); //明示的インテントを使う
        intent.putExtra("red",red); //intentを通じて各色の情報を持ってくる。
        intent.putExtra("green",green);
        intent.putExtra("blue",blue);
        startActivityForResult(intent,REQUEST_CODE); //intentを渡す
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {//subから戻ってきた時、自動的に呼ばれる。
        super.onActivityResult(requestCode, resultCode, data);
        MyView myView = findViewById(R.id.myView);
        if (requestCode == REQUEST_CODE && resultCode == RESULT_OK){ //リクエストコードが戻ってきたかチェック
            red = data.getIntExtra("red",0); //取った値を変数に入れている。
            green = data.getIntExtra("green",0);
            blue = data.getIntExtra("blue",0);
            Log.i("color-red",String.valueOf(red));
            Log.i("color-green",String.valueOf(green));
            Log.i("color-blue",String.valueOf(blue));
            myView.changeColor(red,green,blue);

        }
    }
}