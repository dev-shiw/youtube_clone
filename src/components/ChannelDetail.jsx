import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  console.log(channelDetail,videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
  return <Box minHeight='95vh'>
    <Box>
<div
  style={{ "background-image": "linear-gradient(to top, #dbdcd7 -1%, #dddcd7 10%, #e2c9cc 20%, #e7627d 38%, #b8235a 53%, #801357 62%, #3d1635 75%, #1c1a27 100%)",
  zIndex:10,height:'150px'
  
  }}/>

  <ChannelCard channelDetail={channelDetail} marginTop="-100px"/>
  </Box>
  <Box display="flex" p="2">
<Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos}/>

  </Box>
  </Box>;
};

export default ChannelDetail;
