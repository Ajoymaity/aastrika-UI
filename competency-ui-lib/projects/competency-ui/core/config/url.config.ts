/**
 * urlConfig to return the api url 
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export const urlConfig = {
  host: window.location.protocol + "//" + window.location.host || 'https://sphere.aastrika.org',
  apiSlug: '/apis/protected/v8',
  apiProxy: '/apis/proxies/v8',
  apiPublic: '/apis/public/v8',
  apiBasePath: () => `${urlConfig.host}${urlConfig.apiSlug}`,
  apiBaseProxy:() => `${urlConfig.host}${urlConfig.apiProxy}`,
  apiBasePublic:() => `${urlConfig.host}${urlConfig.apiPublic}`,
  getEntityById: (id:number) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`,
  getAllEntity: () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`,
  getUserPassbook: () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`,
  getSearch:() => `${urlConfig.apiBasePublic()}/publicSearch/getCourses`,
  getHierachyDetails:(identifier, hierarchyType) => `${urlConfig.apiBaseProxy()}/action/content/v3/hierarchy/${identifier}?hierarchyType=${hierarchyType}`,
  getUserdetailsFromRegistry:(wid: string)=> `${urlConfig.apiBaseProxy()}/api/user/v2/read/${wid}`,
  getContentProgress: (id) => `${urlConfig.apiBaseProxy()}/read/content-progres/${id}`
}
