<%--
  Created by IntelliJ IDEA.
  User: xuanzitao
  Date: 2020/7/23
  Time: 下午7:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>navbar</title>
</head>
<body>
<nav class="navbar navbar-expand-lg fixed-top">
    <a class="navbar-brand ml-5" href="/SoftwareDeveloping_PJ_war_exploded/index.jsp"><img src="/SoftwareDeveloping_PJ_war_exploded/images/LOGO.png" style="height:50px;"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active bgcolor">
                <a class="nav-link font-weight-normal" href="/SoftwareDeveloping_PJ_war_exploded/index.jsp">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active bgcolor">
                <a class="nav-link font-weight-normal" href="/SoftwareDeveloping_PJ_war_exploded/jsp/search.jsp">Search <span class="sr-only">(current)</span></a>
            </li>

            <c:if test="${sessionScope.user==null}">
                <li class="nav-item active bgcolor">
                    <a class="nav-link font-weight-normal" href="/SoftwareDeveloping_PJ_war_exploded/account/jumpToLogin">Login <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active bgcolor">
                    <a class="nav-link font-weight-normal" href="/SoftwareDeveloping_PJ_war_exploded/jsp/register.jsp">Register <span class="sr-only">(current)</span></a>
                </li>
            </c:if>

            <c:if test="${sessionScope.user!=null}">
                <li class="nav-item dropdown bgcolor">
                    <a class="nav-link dropdown-toggle font-weight-normal" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ${sessionScope.user.userName}
                    </a>

                    <div class="dropdown-menu bgcolor2" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item font-weight-normal pt-2 pb-2" href="/SoftwareDeveloping_PJ_war_exploded/image/authority/queryCollectedImages">Collection</a>
                        <a class="dropdown-item font-weight-normal pt-2 pb-2" href="/SoftwareDeveloping_PJ_war_exploded/jsp/upload.jsp">Upload</a>
                        <a class="dropdown-item font-weight-normal pt-2 pb-2" href="/SoftwareDeveloping_PJ_war_exploded/image/authority/queryUploadedImages">Profile</a>
                        <a class="dropdown-item font-weight-normal pt-2 pb-2" href="/SoftwareDeveloping_PJ_war_exploded/friend/authority/jumpToFriendPage">Friend</a>
                        <a class="dropdown-item font-weight-normal pt-2 pb-2" href="/SoftwareDeveloping_PJ_war_exploded/account/logout">Logout</a>

                    </div>
                </li>
            </c:if>

        </ul>
    </div>
</nav>

</body>
</html>
