function permute(nums) {
    const result = [];

    function backtrack(path, used, depth = 0) {
        const indent = '  '.repeat(depth); // for indentation by depth level

        console.log(`${indent}🧪 backtrack(path=${JSON.stringify(path)}, used=${JSON.stringify(used)})`);

        // Base case
        if (path.length === nums.length) {
            console.log(`${indent}✔️ Base case: pushing ${JSON.stringify(path)} to result`);
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            console.log(`${indent}🔁 Loop i=${i}, nums[${i}]=${nums[i]}, used=${used[i]} depth=${depth}`);

            if (used[i]) {
                console.log(`${indent}⛔ Skipping index ${i} (nums[${i}] = ${nums[i]}) because it's already used`);
                continue;
            }

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Choose
            path.push(nums[i]);
            used[i] = true;
            console.log(`${indent}👉 Choosing index ${i} (nums[${i}] = ${nums[i]}), path becomes: ${JSON.stringify(path)}`);

            // Explore
            backtrack(path, used, depth + 1);

            // Backtrack
            path.pop();
            used[i] = false;
            console.log(`${indent}🔙 Backtracked index ${i}, removed ${nums[i]}, path back to: ${JSON.stringify(path)}`);
        }
    }

    backtrack([], Array(nums.length).fill(false));
    console.log("✅ Final Result:", JSON.stringify(result));
    return result;
}

permute([1, 2, 2]);
