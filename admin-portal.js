let adminKey = localStorage.getItem('rpos_super_admin_key');

document.getElementById('admin-auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    adminKey = document.getElementById('admin-key').value;
    localStorage.setItem('rpos_super_admin_key', adminKey);
    loadTenants();
});

function logout() {
    localStorage.removeItem('rpos_super_admin_key');
    adminKey = null;
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

function toggleAddTenant() {
    const card = document.getElementById('add-tenant-card');
    card.classList.toggle('hidden');
}

async function loadTenants() {
    if (!adminKey) return;

    try {
        const response = await fetch('/api/admin/tenants', {
            headers: { 'X-Admin-Key': adminKey }
        });

        if (response.status === 403) {
            alert('Invalid Admin Key');
            logout();
            return;
        }

        const tenants = await response.json();
        
        document.getElementById('login-modal').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');

        const tbody = document.querySelector('#tenants-table tbody');
        tbody.innerHTML = '';

        tenants.forEach(t => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <strong>${t.name}</strong><br>
                    <small style="color: #666">Slug: ${t.slug}</small>
                </td>
                <td>${t.email}</td>
                <td><span style="text-transform: capitalize;">${t.plan || 'N/A'}</span></td>
                <td><span class="badge ${t.status}">${(t.status || 'unknown').toUpperCase()}</span></td>
                <td>
                    <small>Users: ${t.max_users || '?'}</small><br>
                    <small>Prods: ${t.max_products || '?'}</small>
                </td>
                <td>${new Date(t.created_at).toLocaleDateString()}</td>
                <td>
                    ${t.status !== 'active' ? `<button class="btn btn-primary btn-sm" style="background:#16a34a; margin-right: 4px;" onclick="updateLicense('${t.id}', 'active')">Activate</button>` : ''}
                    <button class="btn btn-primary btn-sm" style="margin-right: 4px;" onclick="updateLicense('${t.id}', 'active', 'pro')">Upgrade Pro</button>
                    ${t.status !== 'suspended' 
                        ? `<button class="btn btn-danger btn-sm" onclick="suspendTenant('${t.id}')">Suspend</button>`
                        : ''
                    }
                </td>
            `;
            tbody.appendChild(tr);
        });

    } catch (err) {
        console.error('Failed to load tenants', err);
        alert('Network error connecting to API');
    }
}

document.getElementById('create-tenant-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const payload = {
        name: document.getElementById('t-name').value,
        slug: document.getElementById('t-slug').value,
        email: document.getElementById('t-email').value,
        plan: document.getElementById('t-plan').value,
        adminUsername: document.getElementById('t-admin').value,
        adminPassword: document.getElementById('t-pass').value
    };

    try {
        const response = await fetch('/api/admin/tenants', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Admin-Key': adminKey
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        if (response.ok) {
            alert(`Success! License Key: ${data.license_key}`);
            toggleAddTenant();
            document.getElementById('create-tenant-form').reset();
            loadTenants();
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        console.error(err);
        alert('Network error');
    }
});

async function suspendTenant(id) {
    if (!confirm('Are you sure you want to suspend this tenant? They will immediately lose access.')) return;
    
    try {
        await fetch(`/api/admin/tenants/${id}`, {
            method: 'DELETE',
            headers: { 'X-Admin-Key': adminKey }
        });
        loadTenants();
    } catch (err) {
        console.error(err);
    }
}

async function updateLicense(id, status, plan) {
    const payload = {};
    if (status) payload.status = status;
    if (plan) payload.plan = plan;

    if (plan === 'pro') {
        payload.max_users = 50;
        payload.max_products = 10000;
    }

    try {
        await fetch(`/api/admin/tenants/licenses/${id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'X-Admin-Key': adminKey
            },
            body: JSON.stringify(payload)
        });
        loadTenants();
    } catch (err) {
        console.error(err);
    }
}

// Auto-login check
if (adminKey) {
    document.getElementById('admin-key').value = adminKey;
    loadTenants();
}
