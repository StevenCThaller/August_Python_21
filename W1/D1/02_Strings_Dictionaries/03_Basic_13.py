# Print 1 to 255: 
# Write a function that will print all integers from 1 through 255
def one_to_255():
    for x in range(1, 256):
        print(x)

one_to_255()

# Find and Print Max:
# Given a list of integers, find the highest number and print it
def find_and_print_max(nums):
    max = nums[0]

    # iterate through all the values in nums
    for i in range(1, len(nums)):
        # at each value, check if that number is greater than our max
        if nums[i] > max:
            max = nums[i]

    return max

print(find_and_print_max([5,2,1,9,-7,3]))

# Greater than Y:
# Given a list of integers, and a number, y, calculate the number
# of integers in the list that are greater than y
def greater_than_y(nums, y):
    count = 0

    for num in nums:
        if num > y:
            count += 1

    return count 

print(greater_than_y([8,6,7,5,3,0,9], 6))

# Max Min Avg:
# Given a list of integers, calculate and print the largest number,
# the smallest number, and the average of all numbers.
def max_min_avg(nums):
    max = nums[0]
    min = nums[0]
    sum = nums[0]

    for i in range(1, len(nums)):
        if nums[i] > max:
            max = nums[i]

        if nums[i] < min:
            min = nums[i]

        sum += nums[i]
    
    print(f"Max: {max}")
    print(f"Min: {min}")
    print(f"Avg: {sum / len(nums)}")

max_min_avg([8,6,7,5,3,0,9])