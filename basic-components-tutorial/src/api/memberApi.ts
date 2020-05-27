import { MemberEntity } from "../model/member";
import Axios, {AxiosResponse} from "axios";

const gitHubURL = "https://api.github.com"
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    try{
      Axios.get<MemberEntity[]>(gitHubMembersUrl)
        .then(response => resolve(mapMemberListApiToModel(response)));
    } catch(ex) {
      reject(ex);
    }
  });

  return promise;
};

const mapMemberListApiToModel = ({data}: AxiosResponse<any[]>): MemberEntity[] =>
  data.map(gitHutMember => ({
    id: gitHutMember.id,
    login: gitHutMember.login,
    avatar_url: gitHutMember.avatar_url
  }))