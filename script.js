const roleSelect = document.getElementById('role');
const restrictedButtons = document.querySelectorAll('.restricted');

function applyRole(role) {
  const canEdit = role === 'teacher' || role === 'admin';

  restrictedButtons.forEach((btn) => {
    btn.disabled = !canEdit;
    btn.classList.toggle('hidden-by-role', !canEdit);
    btn.title = canEdit ? 'Editable' : 'Students have view-only access';
    if (!canEdit) btn.textContent = 'View';
    else if (btn.textContent === 'View') btn.textContent = 'Edit';
  });

  document.querySelector('.status-pill').textContent =
    canEdit ? '🔒 Authorized Access Only' : '👁️ View-Only Student Mode';
}

roleSelect.addEventListener('change', (e) => applyRole(e.target.value));
applyRole(roleSelect.value);
