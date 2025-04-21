function verifyBadge() {
    const badgeIdInput = document.getElementById('badgeId').value.trim();
    fetch('badges.json')
        .then(response => response.json())
        .then(data => {
            const badge = data.find(b => b.badgeId === badgeIdInput);
            if (badge) {
                document.getElementById('badgeName').textContent = badge.name;
                document.getElementById('badgeRole').textContent = badge.role;
                document.getElementById('badgeIdResult').textContent = badge.badgeId;
                document.getElementById('badgeImage').src = badge.badgeImage;
                document.getElementById('linkedinShareLink').href = badge.linkedinShare;

                document.getElementById('badgeDetails').style.display = 'block';
            } else {
                alert("Badge ID not found. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching badge data:', error));
}
