import axios from 'axios';

export const fetchTheory = async (classId, experiment) => {
  const res = await axios.post('http://localhost:5000/api/theory', {
    classId,
    experiment,
  });

  return res.data.content;
};