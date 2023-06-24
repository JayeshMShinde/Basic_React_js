import axios from "axios";

const Baseurl = "http://localhost:9091/api/";

export const GetTopics= async()=>{
    const response = await axios.get(Baseurl+"topics");
    return response.data;
}

export const AddTopics=async(data)=>{
    const response = await axios.post(Baseurl+"topics",data);
    return response.data;
}

export const UpdateTopics=async(data)=>{
    const response = await axios.put(Baseurl+"topics",data);
    return response.data;
}

export const DeleteTopics=async(id)=>{
    const response = await axios.delete(Baseurl+"topics/"+id);
    return response.data;
}

//===============================================================================

export const GetContent= async()=>{
    const response = await axios.get(Baseurl+"topicscontent");
    return response.data;
}

export const AddContent= async(data)=>{
    const resp = await axios.post(Baseurl+"topicscontent",data);
    return resp.data;
}

export const UpdateContent=async(data)=>{
    const resp = await axios.put(Baseurl+"topicscontent",data);
    return resp.data;
}

export const DeleteContent=async(id)=>{
    const resp = await axios.delete(Baseurl+"topicscontent/"+id);
    return resp.data;
}

//==========================================================================================

export const GetQuestion= async()=>{
    const response = await axios.get(Baseurl+"contentquestion");
    return response.data;
}

export const AddQuestion= async(data)=>{
    const resp = await axios.post(Baseurl+"contentquestion",data);
    return resp.data;
}

export const updateQuestion=async(data)=>{
    const resp = await axios.put(Baseurl+"contentquestion",data);
    return resp.data;
}

export const deleteQuestion=async(id)=>{
    const resp = await axios.delete(Baseurl+"contentquestion/"+id);
    return resp.data;
}

export const topicwiseContent=async(id)=>{
    const resp = await axios.get(Baseurl+'topicwisecontent/'+id);
    return resp.data;
}

    

