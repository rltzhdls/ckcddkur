$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineage/2024/1030/v1/sub_BG.mp4";
        document.getElementById('vd').load();
    }
	}
});

