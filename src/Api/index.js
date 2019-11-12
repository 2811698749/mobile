import axios from 'axios';
axios.interceptors.response.use(res => {
    if (res.status == 200) {
        return JSON.parse(res.data)
    }
    return Promise.reject('请求出错！')
})
axios.interceptors.request.use(config => {
    let token = '1111';
    if (config.method == 'get') {
        let tokenStr = config.url.includes('?') ? `&tokenid=${token}` : `?tokenid=${token}`;
        config.url = config.url + tokenStr;
    } else {
        config.data.tokenid = token;
    }
    return config;
})
export default {
    /*
     功能：获取新闻列表   
     @param1 查询开始序号
     @param2 查询的条数
     @param3 关键字
    */
    getNewsList: (offsetNum, count = 5, bt = '') => {
        return axios.get(`/yth_mo/ActionApi/sFunGskx/list?bt=${bt || ' '}&offsetNum=${offsetNum}&count=${count}`);
    },

    /*
    功能：根据新闻id获取新闻详情   
    @param 新闻id
    */
    getNewDetail: (id) => {
        return axios.get(`/yth_mo/ActionApi/sFunGskx/view?id=${id}`);
    },
    // 获取公司快讯的附件
    getNewsFiles: (id) => {
        return axios.get(`/yth_mo/ActionApi/sFunGskx/ShowFjInfo?zbid=${id}`);
    },
    /*
   功能：根据新闻id获取图片地址   
   @param 新闻id
   */
    getNewImages: (id) => {
        return axios.get(`/yth_mo/ActionApi/sFunGskx/ShowImgInfo?zbid=${id}`);
    },
    /*
   功能：获取公司组织机构  
   */
    getDepartmentList: () => {
        return axios.get(`/yth_mo/ActionApi/gFun/list_dw`);
    },
    /*
   功能：获取公司组织机构下的人员列表   
   @param 部门deptid 
   */
    getDepartmentPersonList: (dept) => {
        return axios.get(`/yth_mo/ActionApi/gFun/list_ry?dept=${dept}`);
    },
    /*
    功能：根据人员工号获取通讯列表   
    @param 工号
    */
    getDepartmentPersonalPhoneInfo: (usergh) => {
        return axios.get(`/yth_mo/ActionApi/sFunTxl/view_txl?usergh=${usergh}`);
    },
    /*
       功能：根据人员工号获取通讯列表   
       @param 工号
       */
    getDepartmentPersonalWorkInfo: (usergh) => {
        return axios.get(`/yth_mo/ActionApi/sFunTxl/view_wz?usergh=${usergh}`);
    },
    /*
      功能：根据电话或姓名查询人员列表   
      @param 电话或姓名
   */
    getPersonListByKeyWorlds: (cxtj) => {
        return axios.get(`/yth_mo/ActionApi/sFunTxl/list_cx?cxtj=${cxtj}`);
    },
    /*
      功能：根据工号查询个人信息   
      @param 工号
   */
    getPersonInfoByGh: (gh) => {
        return axios.get(`/yth_mo/ActionApi/gFun/mx_ry?gh=${gh}`);
    },
    /*
       功能：根据表单id获取附件   
       @zbid 表单id
    */
    getWorkListFiles: (zbid) => {
        return axios.get(`/yth_mo/ActionApi/sFunGzbd/ShowFjInfo?zbid=${zbid}`);
    },
    /*
       功能：获取pdf的路径 
       @shortPath 段路径
    */
    getPdfPath: (shortPath) => {
        return axios.post(`/yth_mo/ActionApi/gFun/GetOAFjPdfPath`, {
            shortPath
        });
    },
    //    获取工作表单列表
    getWorkList: (offsetNum, count, bt = '') => {
        return axios.get(`/yth_mo/ActionApi/sFunGzbd/list?offsetNum=${offsetNum}&count=${count}&bt=${bt}`);
    },
    //工作表单查看权限
    /*
    gzbdid-工作表单ID,
    strZt-工作表单审批状态，
    strLB1-类别1(内部)，
    strLB2-类别2(公开,签收,签收可公开)，
    qfsj-签发时间,
    syqs-剩余签收数量,
    ngbmid-发布该工作表单单位ID
*/
    getViewPermission(gzbdid, strZT, strLB1, strLB2, qfsj, syqs, ngbmid) {
        return axios.get(`/yth_mo/ActionApi/sFunGzbd/QX_View?gzbdid=${gzbdid}&strZT=${strZT}&strLB1=${strLB1}&strLB2=${strLB2}&qfsj=${qfsj}&syqs=${syqs}&ngbmid=${ngbmid}`)
    },
    getWorkListDetail(id){
        return axios.get(`/yth_mo/ActionApi/sFunGzbd/view?bdid=${id}`)
    },
    getSignWorkList( strTZID){
        return axios.get(`/yth_mo/ActionApi/sFunGzbd/QS_Process?strTZID=${strTZID}`)
    }
}