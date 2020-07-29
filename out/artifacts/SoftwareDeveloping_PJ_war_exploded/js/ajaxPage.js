function ajaxPage(search, sort, select, page) {
    $.ajax({
        type: "POST",
        url: "/SoftwareDeveloping_PJ_war_exploded/image/ajaxQueryImage",
        data: {"search": search, "sort": sort, "select": select, "page": page},
        dataType: 'json',
        beforeSend: function () {
            //请求前
        },
        success: function (data) {
            document.getElementById("searchResults").innerHTML = "";
            let searchResults = document.getElementById("searchResults").innerHTML;
            let i;
            for(i=0; i<data.data.length; i++){
                if(i===0||i===3){
                    searchResults += "        <div class=\"row mb-4\">\n";
                }

                searchResults += "                        <div class=\"col-md-6 col-lg-4 d-flex\">\n" +
                    "                <div class=\"card\">\n" +
                    "                    <a href=\"/SoftwareDeveloping_PJ_war_exploded/image/queryImageDetail?imageId="+data.data[i].imageId+"\">" +
                    "                        <img id=\"img"+i+"\" src=\""+"../images/"+data.data[i].path+"\" alt=\"Image\" class=\"card-img-top\">\n" +
                    "                    </a>\n" +
                    "                    <div class=\"card-body d-flex flex-column\">\n" +
                    "                        <div class=\"d-flex justify-content-between mb-3\">\n" +
                    "                            <div class=\"text-small d-flex\">\n" +
                    "                                <div class=\"mr-2\">\n" +
                    "                                    <a href=\"#\" id=\"content"+i+"\">"+data.data[i].content+"</a>\n" +
                    "                                </div>\n" +
                    "                                <span class=\"text-muted\" id=\"dateLastModified"+i+"\">"+data.data[i].tip+"</span>\n" +
                    "                            </div>\n" +
                    "                            <span class=\"badge bg-primary-alt text-primary\" id=\"heat"+i+"\">\n" +
                    "                    <svg class=\"icon icon-sm bg-primary\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "                      <path d=\"M16.5 5C14.8905 5 13.0082 6.82463 12 8C10.9918 6.82463 9.1095 5 7.5 5C4.651 5 3 7.22218 3 10.0504C3 13.1835 6 16.5 12 20C18 16.5 21 13.25 21 10.25C21 7.42177 19.349 5 16.5 5Z\" fill=\"#212529\" />\n" +
                    "                    </svg>\n" +
                    "                                \n" +
                    "                                "+data.data[i].heat+"" +
                    "                  </span>\n" +
                    "                        </div>\n" +
                    "                        <a href=\"/SoftwareDeveloping_PJ_war_exploded/image/queryImageDetail?imageId="+data.data[i].imageId+"\">" +
                    "                            <h4 id=\"title"+i+"\">"+data.data[i].title+"</h4>\n" +
                    "                        </a>\n" +
                    "                        <p class=\"flex-grow-1\" id=\"description"+i+"\">\n" +
                    "                            "+data.data[i].description+"\n" +
                    "                        </p>\n" +
                    "                        <div class=\"d-flex align-items-center mt-3\">\n" +
                    "                            <div class=\"ml-1\">\n" +
                    "                                <span class=\"text-small text-muted\">By</span>\n" +
                    "                                <span class=\"text-small\" id=\"author"+i+"\">"+data.data[i].author+"</span>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>";

                if(i===2){
                    searchResults += "</div>";
                }
            }

            if(i>=3){
                searchResults += "</div>";
            }

            document.getElementById("pageResults").innerHTML = "";
            let pageResults = document.getElementById("pageResults").innerHTML;

            if(data.data.length>0) {
                pageResults += "<div class=\"row justify-content-between align-items-center\">\n" +
                    "    <div class=\"col-auto\">\n" +
                    "        <a href=\"#\" class=\"btn btn-outline-white\" onclick=\"ajaxPage('" + data.search + "', '" + data.sort + "', '" + data.select + "', " + (data.page.pageNo - 1) + ")\">Previous</a>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-auto\">\n" +
                    "        <nav>\n" +
                    "            <ul class=\"pagination mb-0\">";

                for (i = 1; i <= data.page.totalPages; i++) {
                    if (i === data.page.pageNo) {
                        pageResults += "                <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" onclick=\"ajaxPage('" + data.search + "', '" + data.sort + "', '" + data.select + "', " + i + ")\">" + i + "</a>\n" +
                            "                </li>";
                    } else {
                        pageResults += "                <li class=\"page-item\"><a class=\"page-link\" href=\"#\" onclick=\"ajaxPage('" + data.search + "', '" + data.sort + "', '" + data.select + "', " + i + ")\">" + i + "</a>\n" +
                            "                </li>";
                    }
                }

                pageResults += "            </ul>\n" +
                    "        </nav>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-auto\">\n" +
                    "        <a href=\"#\" class=\"btn btn-outline-white\" onclick=\"ajaxPage('" + data.search + "', '" + data.sort + "', '" + data.select + "', " + (data.page.pageNo + 1) + ")\">Next</a>\n" +
                    "    </div>\n" +
                    "</div>";

            }else{
                pageResults +=
                    "<div class=\"container\" id=\"collectedImages\">    <div class=\"decoration-check mb-4\">\n" +
                    "        <div class=\"decoration\">\n" +
                    "            <svg class=\"bg-primary-2\" width=\"156\" height=\"159\" viewBox=\"0 0 156 159\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "                <path d=\"M6.81116 60.239C7.31116 59.53 7.90115 58.866 8.29715 58.102C9.43415 55.902 10.3812 53.598 11.6092 51.453C13.1932 48.69 14.9122 45.997 16.6932 43.356C18.3842 40.847 20.0892 38.319 22.0472 36.02C25.1492 32.374 28.3672 28.812 31.7232 25.398C34.7972 22.272 38.0242 19.28 41.3582 16.433C43.7172 14.419 46.3642 12.738 48.8912 10.924C49.6492 10.38 50.4442 9.88499 51.1212 9.20899C48.9962 9.30999 47.5602 10.816 45.6132 11.487C46.3102 10.867 46.9252 10.1 47.7182 9.65199C53.0772 6.62599 58.4682 3.65297 64.3722 1.78297C64.6632 1.69097 64.9792 1.68298 65.3472 1.78398C61.4882 4.32098 56.8802 5.36497 52.4762 8.12397C53.4332 8.24397 53.8862 8.44497 54.2032 8.31397C55.2362 7.89097 56.2172 7.34298 57.2212 6.84998C61.5302 4.73198 66.0322 3.12597 70.5492 1.51597C75.3952 -0.21203 80.2012 -0.0660178 85.1602 0.659982C90.6312 1.46198 95.9592 2.81399 101.281 4.24699C104.906 5.22299 108.551 6.12599 112.158 7.16099C119.318 9.21199 125.765 12.666 131.603 17.269C133.171 18.506 134.644 19.869 136.234 21.079C139.023 23.201 141.045 25.948 142.882 28.872C143.304 29.543 143.841 30.143 144.345 30.761C146.118 32.939 147.763 35.196 148.761 37.853C150.111 41.439 151.693 44.959 152.738 48.632C154.287 54.083 155.381 59.643 155.406 65.374C155.429 70.735 155.285 76.08 154.351 81.364C153.31 87.28 151.794 93.055 149.023 98.452C146.984 102.422 145.482 106.722 143.068 110.435C138.359 117.674 132.839 124.309 126.634 130.373C122.089 134.814 117.114 138.648 111.763 142.037C109.872 143.234 107.956 144.412 106.181 145.769C101.13 149.627 95.3472 151.865 89.3352 153.644C87.6492 154.143 85.9952 154.743 84.3272 155.294C80.0542 156.71 75.6202 157.37 71.1822 157.952C68.4962 158.305 65.7742 158.411 63.0652 158.568C61.8111 158.64 60.5692 158.815 59.3172 158.163C58.7452 157.863 57.8312 158.217 56.9132 158.286C56.9032 157.451 57.0182 156.724 56.8522 156.069C56.6962 155.451 56.2432 154.909 55.9202 154.333C55.7602 154.427 55.6022 154.522 55.4432 154.616C55.6312 154.897 55.8812 155.155 55.9942 155.462C56.6292 157.196 55.7071 158.462 53.9202 158.04C51.1252 157.38 48.3652 156.538 45.6392 155.631C38.8642 153.374 32.9892 149.534 27.6022 144.944C23.8932 141.784 20.2392 138.51 17.3172 134.581C14.7902 131.185 12.4282 127.657 10.1592 124.083C8.62215 121.661 7.25515 119.114 6.01315 116.527C3.74915 111.816 2.49715 106.763 1.40215 101.681C0.914148 99.42 0.586152 97.123 0.256152 94.834C-0.335848 90.729 0.344149 86.719 1.26215 82.731C1.88915 80.005 2.38715 77.247 3.09015 74.541C4.13315 70.524 5.31716 66.544 6.41216 62.54C6.61716 61.786 6.68315 60.994 6.81415 60.22L6.81116 60.239ZM53.1272 59.27C53.1371 58.631 53.2292 58.354 53.1292 58.196C52.0742 56.511 51.9511 54.618 51.6702 52.711C51.1842 49.408 50.4282 46.143 49.7562 42.868C49.4862 41.549 49.1742 40.236 48.8182 38.938C48.6722 38.405 48.3592 37.917 47.9432 37.025C47.5972 37.766 47.4332 38.024 47.3512 38.305C46.8142 40.154 47.5872 41.872 47.9332 43.626C48.2551 45.262 48.8242 46.862 49.0172 48.51C49.4612 52.297 50.6861 55.757 53.1272 59.27ZM41.8812 37.513C41.3242 35.125 40.8502 32.713 40.1802 30.357C39.7642 28.899 38.9572 27.64 36.9772 27.715C37.3772 28.959 37.8622 30.049 38.0592 31.188C38.2742 32.433 38.1762 33.729 38.2992 34.995C38.4062 36.082 38.6332 37.157 38.9042 38.838C39.7622 37.256 40.5662 36.609 41.8812 37.513ZM94.7522 133.431C93.7322 132.085 92.1702 131.551 90.7132 131.127C89.8932 130.889 88.9552 131.037 88.0222 130.67C86.6612 130.133 85.1432 129.984 83.6861 129.713C83.5241 129.682 83.3111 129.92 83.1242 130.033C83.9382 131.465 83.9442 131.449 85.3372 131.939C87.7841 132.8 90.2222 133.685 92.7652 134.596C93.3121 134.274 94.0042 133.869 94.7522 133.431ZM32.2682 58.123C32.1082 58.191 31.9462 58.26 31.7862 58.328C32.1002 59.032 32.4152 59.737 32.7272 60.441C32.8702 60.381 33.0122 60.321 33.1532 60.26C32.8572 59.548 32.5622 58.835 32.2682 58.123Z\" fill=\"black\"></path>\n" +
                    "            </svg>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <svg class=\"icon bg-white\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "            <path d=\"M18.1206 5.4111C18.5021 4.92016 19.1753 4.86046 19.6241 5.27776C20.073 5.69506 20.1276 6.43133 19.746 6.92227L10.6794 18.5889C10.2919 19.0876 9.60523 19.1401 9.15801 18.7053L4.35802 14.0386C3.91772 13.6106 3.87806 12.8732 4.26944 12.3916C4.66082 11.91 5.33503 11.8666 5.77533 12.2947L9.76023 16.1689L18.1206 5.4111Z\" fill=\"#212529\"></path>\n" +
                    "        </svg>\n" +
                    "\n" +
                    "    </div>    <div class=\"text-center mb-4\">\n" +
                    "        <h5 class=\"mb-1\">There is no search result, please change your keyword and try again!</h5>\n" +
                    "    </div></div>";
            }

            document.getElementById("searchResults").innerHTML = searchResults;
            document.getElementById("pageResults").innerHTML = pageResults;

        },
        error: function () {
            //error
        }
    })
}

function submitForm(){
    let search = document.getElementById("search").value;
    let sort = document.getElementsByName("sort");
    let select = document.getElementsByName("select");
    let valueSort;
    let valueSelect;
    for(let i=0; i<sort.length; i++){
        if(sort[i].checked){
            valueSort = sort[i].value;
        }
    }
    for(let i=0; i<select.length; i++){
        if(select[i].checked){
            valueSelect = select[i].value;
        }
    }
    ajaxPage(search, valueSort, valueSelect, 1);
    return false;
}

