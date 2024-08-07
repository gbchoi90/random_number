import React, { useState } from 'react';

const RandomNumberGame = () => {
  const [companyName, setCompanyName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [availableNumbers, setAvailableNumbers] = useState([...Array(15)].map((_, i) => i + 1));
  const [isSorted, setIsSorted] = useState(false);

  const drawNumber = () => {
    if (companyName.trim() === '') {
      alert('업체명을 입력해주세요.');
      return;
    }

    if (availableNumbers.length === 0) {
      alert('모든 번호가 선택되었습니다.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];

    setParticipants([...participants, { name: companyName, number: selectedNumber }]);
    setAvailableNumbers(availableNumbers.filter(num => num !== selectedNumber));
    setCompanyName('');
    setIsSorted(false);
  };

  const sortParticipants = () => {
    const sortedParticipants = [...participants].sort((a, b) => a.number - b.number);
    setParticipants(sortedParticipants);
    setIsSorted(true);
  };

  return (
    <div style={{ padding: '1rem', width: '100%' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>사다리타기 자리 정하기</h1>
      <p style={{ fontSize: '1.0rem', fontWeight: 'bold', marginBottom: '1rem' }}>부스자리선정 안내<br/>
        1. 업체명을 입력하시고 번호뽑기 버튼을 누르시면 무작위로 번호가 생성됩니다.<br/>
        2. 좌측의 레이아웃의 번호를 확인하셔서 부스 위치를 확인합니다.<br/>

        </p>
      
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="업체명 입력"
          style={{ flexGrow: 1, marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={drawNumber} style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>번호 뽑기</button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={sortParticipants} 
          style={{ padding: '0.5rem 1rem', backgroundColor: '#008CBA', color: 'white', border: 'none', cursor: 'pointer', width: '100%' }}
          disabled={isSorted}
        >
          {isSorted ? '정렬됨' : '번호순 정렬'}
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem', textAlign: 'left' }}>업체명</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem', textAlign: 'left' }}>번호</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{participant.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{participant.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RandomNumberGame;