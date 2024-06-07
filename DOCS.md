# Product Review System

## Overview

The Product Review System allows users to submit reviews for various products, view a list of all reviews, and visualize different metrics related to the reviews. This helps businesses understand customer feedback and make data-driven decisions to improve their products.

## Key Components

1. Form: To input product reviews.
2. Table: To display a list of reviews.
3. Graph: To visualize review metrics such as average rating, distribution of ratings, and trends over time.

## Entities and Relationships

### Entities

1. Product

   - Attributes: ProductID, Name, BrandID, Category, Description, Price
   - Relationships: Belongs to a Brand, Has many Reviews

2. Brand

   - Attributes: BrandID, Name, Description, Date Joined
   - Relationships: Has many Products

3. Reviewer

   - Attributes: ReviewerID, Name, Email, JoinDate
   - Relationships: Has many Reviews

4. Review

   - Attributes: ReviewID, ProductID, ReviewerID, Date, Comments, rating: (Average, value, quality, etc)
   - Relationships: Belongs to a Product, Belongs to a Reviewer, Has many RatingMetrics

5. RatingMetric
   - Attributes: MetricID, ReviewID, MetricType (e.g., Overall, Quality, Value for Money), Score (1-5)
   - Relationships: Belongs to a Review

### Relationships Diagram

Brand
| BrandID (PK)
| Name
| Description
|
|<-- owns --|
|
Product
| ProductID (PK)
| Name
| BrandID (FK)
| Category
| Description
| Price
|
|<-- is reviewed in --|
|
Review
| ReviewID (PK)
| ProductID (FK)
| ReviewerID (FK)
| Date
| Comments
|
|<-- has many --|
|
RatingMetric
| MetricID (PK)
| ReviewID (FK)
| MetricType
| Score
|
Reviewer
| ReviewerID (PK)
| Name
| Email
| JoinDate
|
|<-- writes --|
|
Review
