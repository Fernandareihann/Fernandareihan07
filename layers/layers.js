ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([408346.435794, 9134574.955670, 466546.379400, 9165262.826290]);
var wms_layers = [];

var format_Perkecamatan_0 = new ol.format.GeoJSON();
var features_Perkecamatan_0 = format_Perkecamatan_0.readFeatures(json_Perkecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Perkecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perkecamatan_0.addFeatures(features_Perkecamatan_0);
var lyr_Perkecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perkecamatan_0, 
                style: style_Perkecamatan_0,
                interactive: true,
                title: '<img src="styles/legend/Perkecamatan_0.png" /> Perkecamatan'
            });

        var lyr_Googleearth_1 = new ol.layer.Tile({
            'title': 'Google earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_overlay_krb_2 = new ol.format.GeoJSON();
var features_overlay_krb_2 = format_overlay_krb_2.readFeatures(json_overlay_krb_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_overlay_krb_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_overlay_krb_2.addFeatures(features_overlay_krb_2);
var lyr_overlay_krb_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_overlay_krb_2, 
                style: style_overlay_krb_2,
                interactive: true,
    title: 'overlay_krb<br />\
    <img src="styles/legend/overlay_krb_2_0.png" /> <br />\
    <img src="styles/legend/overlay_krb_2_1.png" /> Sangat Rendah<br />\
    <img src="styles/legend/overlay_krb_2_2.png" /> Rendah<br />\
    <img src="styles/legend/overlay_krb_2_3.png" /> Sedang<br />\
    <img src="styles/legend/overlay_krb_2_4.png" /> Tinggi<br />'
        });
var format_BATAS_KEC_3 = new ol.format.GeoJSON();
var features_BATAS_KEC_3 = format_BATAS_KEC_3.readFeatures(json_BATAS_KEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BATAS_KEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_KEC_3.addFeatures(features_BATAS_KEC_3);
var lyr_BATAS_KEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_KEC_3, 
                style: style_BATAS_KEC_3,
                interactive: true,
                title: '<img src="styles/legend/BATAS_KEC_3.png" /> BATAS_KEC'
            });

lyr_Perkecamatan_0.setVisible(true);lyr_Googleearth_1.setVisible(true);lyr_overlay_krb_2.setVisible(true);lyr_BATAS_KEC_3.setVisible(true);
var layersList = [lyr_Perkecamatan_0,lyr_Googleearth_1,lyr_overlay_krb_2,lyr_BATAS_KEC_3];
lyr_Perkecamatan_0.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_overlay_krb_2.set('fieldAliases', {'FID_Dissol': 'FID_Dissol', 'gridcode': 'gridcode', 'Kelas': 'Kelas', 'Keterangan': 'Keterangan', 'Skor_Leren': 'Skor_Leren', 'FID_CurahH': 'FID_CurahH', 'gridcode_1': 'gridcode_1', 'CH_Annual': 'CH_Annual', 'Sumber': 'Sumber', 'skor_ch': 'skor_ch', 'FID_Tutupa': 'FID_Tutupa', 'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', 'Skor_PL': 'Skor_PL', 'FID_JenisT': 'FID_JenisT', 'MACAM_TANA': 'MACAM_TANA', 'Skor_Tanah': 'Skor_Tanah', 'Skor_Total': 'Skor_Total', 'Klasifikas': 'Klasifikas', });
lyr_BATAS_KEC_3.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_Perkecamatan_0.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_overlay_krb_2.set('fieldImages', {'FID_Dissol': 'TextEdit', 'gridcode': 'TextEdit', 'Kelas': 'TextEdit', 'Keterangan': 'TextEdit', 'Skor_Leren': 'TextEdit', 'FID_CurahH': 'TextEdit', 'gridcode_1': 'TextEdit', 'CH_Annual': 'TextEdit', 'Sumber': 'TextEdit', 'skor_ch': 'TextEdit', 'FID_Tutupa': 'TextEdit', 'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', 'Skor_PL': 'TextEdit', 'FID_JenisT': 'TextEdit', 'MACAM_TANA': 'TextEdit', 'Skor_Tanah': 'TextEdit', 'Skor_Total': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_BATAS_KEC_3.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_Perkecamatan_0.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_overlay_krb_2.set('fieldLabels', {'FID_Dissol': 'no label', 'gridcode': 'no label', 'Kelas': 'no label', 'Keterangan': 'no label', 'Skor_Leren': 'no label', 'FID_CurahH': 'no label', 'gridcode_1': 'no label', 'CH_Annual': 'no label', 'Sumber': 'no label', 'skor_ch': 'no label', 'FID_Tutupa': 'no label', 'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', 'Skor_PL': 'no label', 'FID_JenisT': 'no label', 'MACAM_TANA': 'no label', 'Skor_Tanah': 'no label', 'Skor_Total': 'inline label', 'Klasifikas': 'inline label', });
lyr_BATAS_KEC_3.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BATAS_KEC_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});