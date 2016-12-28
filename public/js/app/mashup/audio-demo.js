(function(){
    //plug-in for viewer
    Mashup.Waveform = $('#sampleWaveform').audioViewer({
        playButton: '#samplePlay',
        zoomInButton: '#sampleZoomIn',
        zoomOutButton: '#sampleZoomOut',
        dropFileBox: '#sampleTrim'
    });
    Mashup.Player = $('.player').audioPlayerGraphical({
               bpm: 100,
               stopButton: '#playerStop',
               saveButton: '#playerSave',
               playButton: '#playerPlay',
               clearButton: '#playerReset'
           });

    $('#waveformSample').draggable({
        revert: 'invalid',
        cursorAt: {
            left: 85
        },
        helper: function (event) {
            var clone = $(this).clone();
            var ndx = $(clone).text().indexOf('(');
            $(clone).text($(clone).text().substr(0, ndx));
            var sampleClone = $("<li />")
                .append(clone)
                .addClass('sampleSelected');
            return sampleClone;
        }
    });
})();
