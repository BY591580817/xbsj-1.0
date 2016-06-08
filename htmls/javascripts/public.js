function iFrameHeight(url) {
	var ifm= document.getElementById(url);
	var subWeb = document.frames ? document.frames[url].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
	   ifm.height = subWeb.body.scrollHeight;
	   ifm.width = subWeb.body.scrollWidth;
	}
}

function skin(n) {
	var url = location.origin;
	n < 4 ? url = "../index.html?index=" + n: url;
	n == 4? url = './Subpages/TeamWork.html': url;
	n == 5? url = './Subpages/Certification.html': url;
	n == 6? url = './3DGallery/index.html': url;
	n == 7? url = './Subpages/Forum.html': url;
	window.location.href = url;
}