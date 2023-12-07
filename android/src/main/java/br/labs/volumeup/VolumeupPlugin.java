package br.labs.volumeup;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.media.AudioManager;
import android.content.Context;

@CapacitorPlugin(name = "Volumeup")
public class VolumeupPlugin extends Plugin {

    @PluginMethod
    public void maximum(PluginCall call) {

        final AudioManager audioManager = (AudioManager)getContext().getSystemService(Context.AUDIO_SERVICE);
        int i = 0;
        while (i < 20) {
            i++;
            audioManager.adjustVolume(AudioManager.ADJUST_RAISE, AudioManager.FLAG_PLAY_SOUND);
        }
    }
}
