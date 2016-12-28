int width;
int height;
background(0,0,0,0);
int xMin = 0;
int xMax = 0;
int xClick;
boolean selected = false;
noStroke();
noFill();
int moveSelectionRange = 10;
void setSize(int fullWidth, int fullHeight){
    width = fullWidth;
    height = fullHeight;
    size( width, height );
}
void mousePressed(){
    //Moves minimum selection if click is within specific range of previous minimum
    if(xMin > mouseX - moveSelectionRange && xMin < mouseX + moveSelectionRange && xMax != width){
        xMin = mouseX;
        xClick = xMax;
        return;
    }
    //Moves maximum selection if click is within specific range of previous maximum
    else if(xMax > mouseX - moveSelectionRange && xMax < mouseX + moveSelectionRange){
        xMax = mouseX;
        xClick = xMin;
        return;
    }
    //clear previous fill
    background(0,0,0,0);
    xClick = mouseX;
}
void mouseReleased(){
    if(xMax != xClick && xMin != xClick){
        //no dragging occurred. Clear selection
        clear();
        xMin = xClick;
        xMax = width;
        selected = false;
        $('#sampleWaveform').audioViewer('movePlayIndicator');
        //If we're already playing the sample, go ahead and keep playing with new location
        if($('#sampleWaveform').audioViewer('isPlaying')){
            $('#sampleWaveform').audioViewer('stop');
            $('#sampleWaveform').audioViewer('play');
        }
    }
    noFill();
}
void mouseDragged(){
    if(mouseX < xClick){
        xMax = xClick;
        xMin = mouseX;
    }
    else{
        xMin = xClick;
        xMax = mouseX;
    }
    background(0,0,0,0);
    fill(#333333, 80);
    rect(xMin, 0, xMax - xMin, height );
    selected = true;
}
void setTrim(int min, int max){
    xMin = min;
    xMax = max;
    background(0,0,0,0);
    fill(#333333, 80);
    rect(xMin, 0, xMax - xMin, height );
    selected = true;
}
int getMin(){
    return xMin;
}
int getMax(){
    return xMax;
}
boolean isSelected(){
    return selected;
}
void clear(){
    background(0,0,0,0);
    xMax = width;
    xMin = 0;
    selected = false;
    $('#sampleWaveform').audioViewer('movePlayIndicator');
}
