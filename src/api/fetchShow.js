import axios from "axios";
// import {formatSeasons} from "../utils/formatSeasons"

export const fetchShow = async () => {
  return(axios.get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {return res})
  )};

