package com.alfred;

import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    public MainActivity() {
        super();
        Log.i("MAINACTIVITY", "MainActivity constructor");
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        Log.i("MAINACTIVITY", "MainActivity getMainComponentName");
        return "Alfred";
    }
}
