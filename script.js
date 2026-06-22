// ==========================================================================
// 방문자 카운터 및 이스터에그 기능 제어 로직
// ==========================================================================

document.addEventListener("DOMContentLoaded", function() {
  // 1. 로컬 스토리지를 활용한 단순 누적 방문자 수 처리
  let currentVisits = localStorage.getItem("nightz_layout_counter");
  
  if (currentVisits === null) {
    currentVisits = 1;
  } else {
    currentVisits = parseInt(currentVisits) + 1;
  }
  
  localStorage.setItem("nightz_layout_counter", currentVisits);
  
  // 예시의 고정 자릿수 폼을 유지하기 위한 6자리 0 패딩 포맷팅
  let formatted = currentVisits.toString().padStart(6, '0');
  
  const counterElement = document.getElementById("counter-val");
  if (counterElement) {
    counterElement.innerText = formatted;
  }
});

// 2. 하단 이스터에그 '?' 링크 작동 모달 제어
const openSecret = document.getElementById("openSecret");
const secretModal = document.getElementById("secretModal");
const closeSecret = document.getElementById("closeSecret");

if (openSecret && secretModal && closeSecret) {
  // 모달 활성화
  openSecret.addEventListener("click", function(e) {
    e.preventDefault();
    secretModal.style.display = "flex";
  });

  // 모달 비활성화
  closeSecret.addEventListener("click", function() {
    secretModal.style.display = "none";
  });

  // 배경 요소를 직접 터치했을 때 레이어 파괴 처리
  window.addEventListener("click", function(e) {
    if (e.target === secretModal) {
      secretModal.style.display = "none";
    }
  });
}
