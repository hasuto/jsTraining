package jp.ac.iwate_it.y21511.mydrawapp;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class SubActivity extends AppCompatActivity {
    SeekBar seekBarRed,seekBarGreen,seekBarBlue; //フィールド
    TextView textColorSample;
    Button button;
    @Override
    protected void onCreate(@Nullable  Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub); //actinity_subの読み込み


        seekBarRed = findViewById(R.id.seekBarRed);
        seekBarGreen = findViewById(R.id.seekBarGreen);
        seekBarBlue = findViewById(R.id.seekBarBlue);
        textColorSample = findViewById(R.id.textColorSample);
        button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public  void onClick(View view){
    finishSubActivity();
            }
        });

        Intent intent = getIntent(); //インテント
        seekBarRed.setProgress(intent.getIntExtra("red",0)); //mainから与えられたRGBの値を当てる(色の情報が送られてきている)
        seekBarGreen.setProgress(intent.getIntExtra("green",0));
        seekBarBlue.setProgress(intent.getIntExtra("blue",0));

        textColorSample.setBackgroundColor(Color.rgb(seekBarRed.getProgress(),seekBarGreen.getProgress(),seekBarBlue.getProgress()));//シークバーから取った値を背景に反映させる


        seekBarRed.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {//シークバーがいじられたときに発生
            @Override
            public  void onProgressChanged(SeekBar seekBar, int i, boolean b){  
                Log.i("progress",String.valueOf(seekBarRed.getProgress()));
                textColorSample.setBackgroundColor(Color.rgb(seekBarRed.getProgress(),seekBarGreen.getProgress(),seekBarBlue.getProgress()));


            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar){

            }
        });

        seekBarGreen.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public  void onProgressChanged(SeekBar seekBar, int i, boolean b){
                Log.i("progress",String.valueOf(seekBarGreen.getProgress()));
                textColorSample.setBackgroundColor(Color.rgb(seekBarRed.getProgress(),seekBarGreen.getProgress(),seekBarBlue.getProgress()));

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar){

            }
        });

        seekBarBlue.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public  void onProgressChanged(SeekBar seekBar, int i, boolean b){

                textColorSample.setBackgroundColor(Color.rgb(seekBarRed.getProgress(),seekBarGreen.getProgress(),seekBarBlue.getProgress()));
                Log.i("progress",String.valueOf(seekBarGreen.getProgress()));

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar){

            }
        });



    }



    public  void finishSubActivity(){
        Intent intent = getIntent(); 


        intent.putExtra("red", seekBarRed.getProgress()); //シークバーからひろった値を送る
        intent.putExtra("green", seekBarGreen.getProgress());
        intent.putExtra("blue", seekBarBlue.getProgress());

        setResult(RESULT_OK,intent); //intentを返し、戻る
        finish();
    }
}
